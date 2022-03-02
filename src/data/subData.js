class Data{
    constructor(title,url){
        this.title=title;
        this.url=url;
    }
}

const adminData=[
    new Data('카카오 계정','https://accounts.kakao.com/weblogin/find_account_guide?continue=http://www.kakao.com/main'),
    new Data('카카오계정 정보관리','https://accounts.kakao.com/login?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo'),
    new Data('비밀번호 재설정','https://accounts.kakao.com/weblogin/find_password?continue=http%3A%2F%2Fwww.kakao.com%2Fmain'),
]
const reportData=[
    new Data('권리침해신고 안내','http://www.kakao.com/policy/right'),
    new Data('카카오 권리침해 신고/소명','https://cs.kakao.com/requests?service=41'),
    new Data('이용자 보호 현황','https://clean.kakao.com/transparence/report'),
    new Data('안전한 디지털 세상','https://clean.kakao.com/safe/home'),
]

export {adminData, reportData};