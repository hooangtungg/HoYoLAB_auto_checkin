/** Vui lòng vào mục điểm danh trên HoYoLAB, sau đó bấm F12 để mở khu vực dành cho Developer, sau đó di chuyển đến tab Console (bảng điều kiển) rồi dán dòng lệch dưới đây để lấy token **/
/** https://www.hoyolab.com/circles **/

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
let token = 'Error';
if (document.cookie.includes('ltoken=')) {
  token = `ltoken=${getCookie('ltoken')}; ltuid=${getCookie('ltuid')};`;
} else if (document.cookie.includes('ltoken_v2=')) {
  token = `account_mid_v2=${getCookie('account_mid_v2')}; account_id_v2=${getCookie('account_id_v2')}; ltoken_v2=${getCookie('ltoken_v2')}; ltmid_v2=${getCookie('ltmid_v2')}; ltuid_v2=${getCookie('ltuid_v2')};`;
}
let ask = confirm(token + '\n\nVui lòng bấm Enter, sau đó copy token này vào  Google Apps Script Project');
if (ask) {
  copy(token);
  msg = token;
} else {
  msg = 'Cancel';
}
