const qiniu = require('qiniu')

// 自己可以到"www.qiniu.com" 申请自己的七牛空间
// 这个账号是我的，不是开放的哦
const ACCESS_KEY = "0JarXXhf0qanJGiAkrsik3DycyW9GXr3ryxTKKTp";
const SECRET_KEY = "2TodjtSvdm_KhLV_rqpfqzU6ffzi1L4KrDhbJiFQ";

export default async function getUploadToken() {
  return new Promise((resolve, reject) => {
    let mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    let options = {
      scope: "alex93xiao",
      expires: 7200
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);

    if (uploadToken) {
      resolve({
        token: uploadToken
      })
    } else {
      reject()
    }
  })
}

