class Menu{
    constructor(title, url){
        this.title=title;
        this.url=url;
    }
}
const footerData=[
    new Menu('회사소개','http://www.kakaocorp.com/'),
    new Menu('이용약관','https://www.kakao.com/policy/terms'),
    new Menu('개인정보처리방침','https://www.kakao.com/policy/privacy'),
    new Menu('운영정책','https://www.kakao.com/policy/oppolicy'),
    new Menu('청소년보호정책','https://www.kakao.com/policy/safeguard'),
    new Menu('권리침해신고안내','https://www.kakao.com/policy/right'),
    new Menu('공지사항','http://www.kakao.com/notices'),
]
export {footerData}; 