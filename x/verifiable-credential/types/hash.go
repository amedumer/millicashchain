package types

import (
	"crypto/hmac"
	"crypto/sha256"
)

const _hashlength = 32

// HmacSha256 is the SHA256 HMAC hashing method
type HmacSha256 struct {
	secret string
}

// New creates a new SHA256 HMAC hashing method
func New(secret string) *HmacSha256 {
	return &HmacSha256{
		secret: secret,
	}
}

// HashLength returns the length of hashes generated by Hash() in bytes
func (h *HmacSha256) HashLength() int {
	return _hashlength
}

// Hash generates a SHA256 HMAC hash from a byte array
func (h *HmacSha256) Hash(d []byte) []byte {
	hash := hmac.New(sha256.New, []byte(h.secret))
	hash.Write(d)

	return hash.Sum(nil)
}
