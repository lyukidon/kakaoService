class MainObj{
    constructor(title,id){
        this.id=id
        this.title=title;
        this.src=`/img/${title}.png`
    }
}

const arr=['카카오톡','카카오계정','카카오 이모티콘','카카오톡 지갑','My 구독', '카카오톡 선물하기', '카카오TV','카카오페이지','카카오스토리','카카오같이가치','카카오톡 채널 관리자','카카오맵'];
const mainData=arr.map((data,index)=>new MainObj(data,index))
export default mainData;