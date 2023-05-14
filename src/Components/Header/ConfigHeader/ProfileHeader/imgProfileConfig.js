import user_default from "../../../../assets/imgUserProfile/user_default.png";
import user_0 from "../../../../assets/imgUserProfile/user_0.png";
import user_1 from "../../../../assets/imgUserProfile/user_1.png";
import user_2 from "../../../../assets/imgUserProfile/user_2.png";
import user_3 from "../../../../assets/imgUserProfile/user_3.png";
import user_4 from "../../../../assets/imgUserProfile/user_4.png";
import user_5 from "../../../../assets/imgUserProfile/user_5.png";
import user_6 from "../../../../assets/imgUserProfile/user_6.png";
import user_7 from "../../../../assets/imgUserProfile/user_7.png";
import user_8 from "../../../../assets/imgUserProfile/user_8.png";
import user_9 from "../../../../assets/imgUserProfile/user_9.png";
import user_10 from "../../../../assets/imgUserProfile/user_10.png";
import user_11 from "../../../../assets/imgUserProfile/user_11.png";
import user_12 from "../../../../assets/imgUserProfile/user_12.png";
import user_13 from "../../../../assets/imgUserProfile/user_13.png";
import user_14 from "../../../../assets/imgUserProfile/user_14.png";
import user_15 from "../../../../assets/imgUserProfile/user_15.png";
import user_16 from "../../../../assets/imgUserProfile/user_16.png";
import user_17 from "../../../../assets/imgUserProfile/user_17.png";

const ArrayImgs = [
  { img: user_default, nameImg: "user_default" },
  { img: user_0, nameImg: "user_0" },
  { img: user_1, nameImg: "user_1" },
  { img: user_2, nameImg: "user_2" },
  { img: user_3, nameImg: "user_3" },
  { img: user_4, nameImg: "user_4" },
  { img: user_5, nameImg: "user_5" },
  { img: user_6, nameImg: "user_6" },
  { img: user_7, nameImg: "user_7" },
  { img: user_8, nameImg: "user_8" },
  { img: user_9, nameImg: "user_9" },
  { img: user_10, nameImg: "user_10" },
  { img: user_11, nameImg: "user_11" },
  { img: user_12, nameImg: "user_12" },
  { img: user_13, nameImg: "user_13" },
  { img: user_14, nameImg: "user_14" },
  { img: user_15, nameImg: "user_15" },
  { img: user_16, nameImg: "user_16" },
  { img: user_17, nameImg: "user_17" },
];

const objImg = {
  user_default: user_default,
  user_0: user_0,
  user_1: user_1,
  user_2: user_2,
  user_3: user_3,
  user_4: user_4,
  user_5: user_5,
  user_6: user_6,
  user_7: user_7,
  user_8: user_8,
  user_9: user_9,
  user_10: user_10,
  user_11: user_11,
  user_12: user_12,
  user_13: user_13,
  user_14: user_14,
  user_15: user_15,
  user_16: user_16,
  user_17: user_17,
};

function SelectImgProfile(i) {
  return objImg[i];
}

export { SelectImgProfile, ArrayImgs };
