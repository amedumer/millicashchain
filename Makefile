PACKAGES="./x/..."
# build paramters 
BUILD_FOLDER = build
APP_VERSION = $(git describe --tags --always)
cosmos-version = v0.45.0


install-protoc-gen-ts:
	cd scripts && npm install
	mkdir -p scripts/protoc
	curl -L https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip -o scripts/protoc/protoc.zip
	cd scripts/protoc && unzip -o protoc.zip
	rm scripts/protoc/protoc.zip


download-cosmos-proto:
	mkdir -p proto/cosmos/base/query/v1beta1
	curl https://raw.githubusercontent.com/cosmos/cosmos-sdk/${cosmos-version}/proto/cosmos/base/query/v1beta1/pagination.proto -o proto/cosmos/base/query/v1beta1/pagination.proto
	mkdir -p proto/cosmos/base/v1beta1
	curl https://raw.githubusercontent.com/cosmos/cosmos-sdk/${cosmos-version}/proto/cosmos/base/v1beta1/coin.proto -o proto/cosmos/base/v1beta1/coin.proto
	mkdir -p proto/google/api
	curl https://raw.githubusercontent.com/cosmos/cosmos-sdk/${cosmos-version}/third_party/proto/google/api/annotations.proto -o proto/google/api/annotations.proto
	curl https://raw.githubusercontent.com/cosmos/cosmos-sdk/${cosmos-version}/third_party/proto/google/api/http.proto -o proto/google/api/http.proto
	mkdir -p proto/gogoproto
	curl https://raw.githubusercontent.com/cosmos/cosmos-sdk/${cosmos-version}/third_party/proto/gogoproto/gogo.proto -o proto/gogoproto/gogo.proto

gen-protoc-ts: download-cosmos-proto
	mkdir -p ./client/src/types/generated/
	ls proto/did | xargs -I {} ./node_modules/protoc/protoc/bin/protoc \
        --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
        --ts_proto_out="./client/src/types/generated" \
        --proto_path="./proto" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
        did/{}
	cd ..
	ls proto/issuer | xargs -I {} ./node_modules/protoc/protoc/bin/protoc \
        --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
        --ts_proto_out="./client/src/types/generated" \
        --proto_path="./proto" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
        issuer/{}
	cd ..
	ls proto/regulator | xargs -I {} ./node_modules/protoc/protoc/bin/protoc \
        --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
        --ts_proto_out="./client/src/types/generated" \
        --proto_path="./proto" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
        regulator/{}
	cd ..
	ls proto/verifiable-credential | xargs -I {} ./node_modules/protoc/protoc/bin/protoc \
        --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
        --ts_proto_out="./client/src/types/generated" \
        --proto_path="./proto" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
        verifiable-credential/{}