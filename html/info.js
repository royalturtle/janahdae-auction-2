const player_list = [
	{"name":"", "tier-type":1, "tier-number":1, "position":0, "icon-small":"", "icon-big":""},
	
	{"name":"얍얍", "tier-type":5, "tier-number":4, "position":0, "icon-small":image_server + "2mxHrhPS1u", "icon-big":image_server + "1SRuHBlVq4"},
	{"name":"김뿡", "tier-type":5, "tier-number":4, "position":0, "icon-small":image_server + "2SKRT5QqVq", "icon-big":image_server + "2SKRT1huSG"},
	{"name":"중력", "tier-type":5, "tier-number":4, "position":0, "icon-small":image_server + "1SRuHFUn4q", "icon-big":image_server + "37a8GFfa8O"},
	{"name":"룩삼", "tier-type":4, "tier-number":2, "position":0, "icon-small":image_server + "0SZN5PYn2s", "icon-big":image_server + "0SZN5LprDX"},
	{"name":"치킨쿤", "tier-type":5, "tier-number":4, "position":0, "icon-small":image_server + "27hb4TSZAi", "icon-big":image_server + "0SZN5Lq22J"},
	
	{"name":"푸린", "tier-type":3, "tier-number":2, "position":1, "icon-small":image_server + "0nCDU1XrnC", "icon-big":image_server + "27hb4Pk55S"},
	{"name":"삼식", "tier-type":5, "tier-number":3, "position":1, "icon-small":image_server + "17p3sdWj8G", "icon-big":image_server + "2SKRT1j8TC"},
	{"name":"스나랑", "tier-type":5, "tier-number":4, "position":1, "icon-small":image_server + "37a8GJPEJu", "icon-big":image_server + "2mxHrdhzLm"},
	{"name":"남봉", "tier-type":4, "tier-number":4, "position":1, "icon-small":image_server + "0nCDU1YEFo", "icon-big":image_server + "2mxHrdi8l8"},
	{"name":"쌍베", "tier-type":3, "tier-number":4, "position":1, "icon-small":image_server + "1SRuHFVoz4", "icon-big":image_server + "1SRuHBnL3a"},
	
	{"name":"류제홍", "tier-type":5, "tier-number":4, "position":2, "icon-small":image_server + "2SKRT5SLom", "icon-big":image_server + "1SRuHBngR8"},
	{"name":"눈꽃", "tier-type":6, "tier-number":4, "position":2, "icon-small":image_server + "0nCDU1Yryy", "icon-big":image_server + "1n4kfnmYsC"},
	{"name":"도현", "tier-type":5, "tier-number":3, "position":2, "icon-small":image_server + "1n4kfrVBlq", "icon-big":image_server + "2mxHrdix60"},
	{"name":"감블러", "tier-type":5, "tier-number":2, "position":2, "icon-small":image_server + "27hb4TU2o8", "icon-big":image_server + "37a8GFhrBO"},
	{"name":"김뚜띠", "tier-type":5, "tier-number":1, "position":2, "icon-small":image_server + "0SZN5PaVKU", "icon-big":image_server + "0nCDTxqroO"},
	
	{"name":"따효니", "tier-type":5, "tier-number":3, "position":3, "icon-small":image_server + "2mxHrhNhK0", "icon-big":image_server + "2SKRT1koEK"},
	{"name":"플러리", "tier-type":4, "tier-number":2, "position":3, "icon-small":image_server + "27hb4TQNLm", "icon-big":image_server + "2SKRT1kyf8"},
	{"name":"러너", "tier-type":5, "tier-number":4, "position":3, "icon-small":image_server + "2mxHrhNy78", "icon-big":image_server + "2SKRT1l7Ni"},
	{"name":"박나나", "tier-type":4, "tier-number":3, "position":3, "icon-small":image_server + "27hb4TQdKS", "icon-big":image_server + "0SZN5LswQZ"},
	{"name":"유나땅", "tier-type":5, "tier-number":3, "position":3, "icon-small":image_server + "1SRuHFTIuq", "icon-big":image_server + "37a8GFivNO"},
	
	{"name":"한동숙", "tier-type":4, "tier-number":3, "position":4, "icon-small":image_server + "2mxHrhOgR0", "icon-big":image_server + "2SKRT1u6mW"},
	{"name":"던", "tier-type":4, "tier-number":2, "position":4, "icon-small":image_server + "0SZN5PXhUc", "icon-big":image_server + "0SZN5M6APU"},
	{"name":"연두부", "tier-type":4, "tier-number":2, "position":4, "icon-small":image_server + "37a8GJNfWW", "icon-big":image_server + "37a8GG0Py0"},
	{"name":"빅헤드", "tier-type":4, "tier-number":3, "position":4, "icon-small":image_server + "37a8GJNnGW", "icon-big":image_server + "1n4kfo9sIS"},
	{"name":"이춘향", "tier-type":4, "tier-number":4, "position":4, "icon-small":image_server + "1n4kfrSzdi", "icon-big":image_server + "0nCDTyI3iY"},
];

const tier_list = [
	{"name":"", 			"icon":""},
	{"name":"iron", 		"icon":image_server + "b7EN2w2i1x"},
	{"name":"bronze", 		"icon":image_server + "Z7EN2w2p79"},
	{"name":"silver", 		"icon":image_server + "X7EN2w2i5g"},
	{"name":"gold", 		"icon":image_server + "u7EN2w2qiR"},
	{"name":"platinum", 	"icon":image_server + "V7EN2w4RsO"},
	{"name":"diamond", 		"icon":image_server + "a7EN2w4S87"},
	{"name":"master", 		"icon":image_server + "x7EN2w5aZN"},
	{"name":"grandmaster",  "icon":image_server + "K7EN2w5pSl"},
	{"name":"challenger", 	"icon":image_server + "s7EN2w7FV9"}
];

const position_dict = [
	{"name":"top", "icon":image_server + "d7EN2xJjZ0"},
	{"name":"jug", "icon":image_server + "A7EN2xJdMk"},
	{"name":"mid", "icon":image_server + "M7EN2xJjZQ"},
	{"name":"bot", "icon":image_server + "I7EN2xJdCu"},
	{"name":"sup", "icon":image_server + "n7EN2xJehf"},
];

const manager_list = ["얍얍", "푸린", "류제홍", "따효니", "한동숙"];
