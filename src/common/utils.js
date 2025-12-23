function uuid() {
  return 'xxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function removeEmojis(str) {
  // 这个正则匹配大部分 emoji
  return str.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
}
export {uuid,removeEmojis}