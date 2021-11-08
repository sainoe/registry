// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: registry/consumer.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Consumer struct {
	Index      string   `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	ChainID    string   `protobuf:"bytes,2,opt,name=chainID,proto3" json:"chainID,omitempty"`
	Creator    string   `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
	Validators []string `protobuf:"bytes,4,rep,name=validators,proto3" json:"validators,omitempty"`
}

func (m *Consumer) Reset()         { *m = Consumer{} }
func (m *Consumer) String() string { return proto.CompactTextString(m) }
func (*Consumer) ProtoMessage()    {}
func (*Consumer) Descriptor() ([]byte, []int) {
	return fileDescriptor_61cb9dc882c55892, []int{0}
}
func (m *Consumer) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Consumer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Consumer.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Consumer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Consumer.Merge(m, src)
}
func (m *Consumer) XXX_Size() int {
	return m.Size()
}
func (m *Consumer) XXX_DiscardUnknown() {
	xxx_messageInfo_Consumer.DiscardUnknown(m)
}

var xxx_messageInfo_Consumer proto.InternalMessageInfo

func (m *Consumer) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Consumer) GetChainID() string {
	if m != nil {
		return m.ChainID
	}
	return ""
}

func (m *Consumer) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Consumer) GetValidators() []string {
	if m != nil {
		return m.Validators
	}
	return nil
}

func init() {
	proto.RegisterType((*Consumer)(nil), "sainoe.registry.registry.Consumer")
}

func init() { proto.RegisterFile("registry/consumer.proto", fileDescriptor_61cb9dc882c55892) }

var fileDescriptor_61cb9dc882c55892 = []byte{
	// 196 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2f, 0x4a, 0x4d, 0xcf,
	0x2c, 0x2e, 0x29, 0xaa, 0xd4, 0x4f, 0xce, 0xcf, 0x2b, 0x2e, 0xcd, 0x4d, 0x2d, 0xd2, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0x92, 0x28, 0x4e, 0xcc, 0xcc, 0xcb, 0x4f, 0xd5, 0x83, 0xc9, 0xc3, 0x19,
	0x4a, 0x25, 0x5c, 0x1c, 0xce, 0x50, 0xb5, 0x42, 0x22, 0x5c, 0xac, 0x99, 0x79, 0x29, 0xa9, 0x15,
	0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x10, 0x8e, 0x90, 0x04, 0x17, 0x7b, 0x72, 0x46, 0x62,
	0x66, 0x9e, 0xa7, 0x8b, 0x04, 0x13, 0x58, 0x1c, 0xc6, 0x05, 0xcb, 0x14, 0xa5, 0x26, 0x96, 0xe4,
	0x17, 0x49, 0x30, 0x43, 0x65, 0x20, 0x5c, 0x21, 0x39, 0x2e, 0xae, 0xb2, 0xc4, 0x9c, 0xcc, 0x14,
	0x10, 0xa7, 0x58, 0x82, 0x45, 0x81, 0x59, 0x83, 0x33, 0x08, 0x49, 0xc4, 0xc9, 0xf5, 0xc4, 0x23,
	0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2,
	0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0xb4, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4,
	0x92, 0xf3, 0x73, 0xf5, 0x21, 0x8e, 0xd6, 0x87, 0x7b, 0xaa, 0x02, 0xc1, 0x2c, 0xa9, 0x2c, 0x48,
	0x2d, 0x4e, 0x62, 0x03, 0xfb, 0xce, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x07, 0x6f, 0xa8, 0x93,
	0xf8, 0x00, 0x00, 0x00,
}

func (m *Consumer) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Consumer) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Consumer) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Validators) > 0 {
		for iNdEx := len(m.Validators) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Validators[iNdEx])
			copy(dAtA[i:], m.Validators[iNdEx])
			i = encodeVarintConsumer(dAtA, i, uint64(len(m.Validators[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintConsumer(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ChainID) > 0 {
		i -= len(m.ChainID)
		copy(dAtA[i:], m.ChainID)
		i = encodeVarintConsumer(dAtA, i, uint64(len(m.ChainID)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintConsumer(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintConsumer(dAtA []byte, offset int, v uint64) int {
	offset -= sovConsumer(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Consumer) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovConsumer(uint64(l))
	}
	l = len(m.ChainID)
	if l > 0 {
		n += 1 + l + sovConsumer(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovConsumer(uint64(l))
	}
	if len(m.Validators) > 0 {
		for _, s := range m.Validators {
			l = len(s)
			n += 1 + l + sovConsumer(uint64(l))
		}
	}
	return n
}

func sovConsumer(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozConsumer(x uint64) (n int) {
	return sovConsumer(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Consumer) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConsumer
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Consumer: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Consumer: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthConsumer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConsumer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthConsumer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConsumer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChainID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthConsumer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConsumer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Validators", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthConsumer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConsumer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Validators = append(m.Validators, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipConsumer(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthConsumer
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipConsumer(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowConsumer
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowConsumer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthConsumer
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupConsumer
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthConsumer
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthConsumer        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowConsumer          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupConsumer = fmt.Errorf("proto: unexpected end of group")
)
