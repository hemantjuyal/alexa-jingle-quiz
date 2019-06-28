/**
 *
 * @author Hemant Juyal
 */

const riddles_repo = [{
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Bajaj.mp3'/>",
    "answer": ["bajaj", "humaara bajaj", 'bajaj scooter']
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Bharat_Ek_Khoj.mp3'/>",
    "answer": ["bharat ek khoj", "the discovery of india", "discovery of india"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Byomkesh_Bakshi.mp3'/>",
    "answer": ["byomkesh bakshi", "byomkesh"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Cadbury.mp3'/>",
    "answer": ["cadbury dairy milk", "cadbury", "cadbury chocolate"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Chandrakanta.mp3'/>",
    "answer": ["chandrakanta"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Cibaca.mp3'/>",
    "answer": ["cicaba", "cibaca tooth paste", "cibaca paste"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Circus.mp3'/>",
    "answer": ["circus", "circus serial"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Dekh_Bhai_Dekh.mp3'/>",
    "answer": ["dekh bhai dekh", "dekh bhai dekh serial"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Dhara.mp3'/>",
    "answer": ["dhara", "dhara refined oil", "dhara oil"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Dominos.mp3'/>",
    "answer": ["dominos", "dominos pizza"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Doordarshan_News.mp3'/>",
    "answer": ["doordarshan news", "DD news", "DD news channel", "doordarshan news channel"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Doordarshans_Signature_Tune_and_Montage.mp3'/>",
    "answer": ["doordarshan", "DD", "DD channel", "doordarshan channel"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Duck_Tales.mp3'/>",
    "answer": ["duck tales"]
  }, {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Ek_Chidiya_Anek_Chidiya.mp3'/>",
    "answer": ["ek chidiya anek chidiya", "ek chidiya", "ek anek chidiya"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Flop_Show.mp3'/>",
    "answer": ["flop show"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Jungle_Book.mp3'/>",
    "answer": ["jungle book", "the jungle book", "mowgli"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Lifebuoy.mp3'/>",
    "answer": ["lifebuoy", "lifebuoy soap"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Liril.mp3'/>",
    "answer": ["liril", "liril soap"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Maggi.mp3'/>",
    "answer": ["maggi", "maggi noodles", "maggie", "maggie noodles"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Mahabharat.mp3'/>",
    "answer": ["mahabharat", "mahabharata"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Mile_Sur_Mera_Tumhara.mp3'/>",
    "answer": ["mile sure mera tumhara", "mile sur mera", "mile sur"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Nirma.mp3'/>",
    "answer": ["nirma", "nirma washing powder", "nirma washing powder", "washing powder nirma"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Spread_The_Light_of_Freedom.mp3'/>",
    "answer": ["the light of freedom", "light of freedom", "the lights of freedom", "lights of freedom"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Surabhi.mp3'/>",
    "answer": ["surabhi", "surbhi"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Tu_Tu_Main_Main.mp3'/>",
    "answer": ["tu tu main main", "tu tu mein mein"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Vicco_Vajradanti.mp3'/>",
    "answer": ["vicco", "vicco vajradanti", "vicco vajradanti ayurvedic cream"]
  },
  {
    "question": "<audio src='https://smartassistants.s3-eu-west-1.amazonaws.com/media/audio/superhit_nineties/Yeh_Jo_Hai_Zindagi.mp3'/>",
    "answer": ["ye jo hai zindagi", "ye hai zindagi"]
  }
];


exports.riddles_data = riddles_repo;
