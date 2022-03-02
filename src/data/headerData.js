class LinkObj {
    constructor(title, link){
        this.title=title;
        this.link='https://cs.kakao.com/search?query='+this.title;
    }
}
const arr=['이모티콘결제취소', '계정비밀번호변경', '멀티프로필', '알림끄기', '이용제한조치'];
const linkData=arr.map(title=>new LinkObj(title));
export default linkData;