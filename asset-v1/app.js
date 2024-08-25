/** Generated by sealldevelopers app.js generator **/
var app=new function(){this.name="Runners",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=7164,this.bpm=134,this.totalframe=344,this.nbpolo=7,this.nbloopbonus=4,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=27,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#0f3143",this.col0="#ffffff",this.col1="#852a44",this.col2="#5e1e2f",this.col3="#d16d8a",this.col4="#d16d8a",this.animearray=[{name:"01_kick",color:"fd6088",uniqsnd:!0},{name:"02_clap",color:"fd6088",uniqsnd:!0},{name:"03_toms",color:"fd6088",uniqsnd:!1},{name:"04_hats",color:"fd6088",uniqsnd:!0},{name:"05_beatbox",color:"fd6088",uniqsnd:!1},{name:"06_bass",color:"30beff",uniqsnd:!1},{name:"07_guitar",color:"30beff",uniqsnd:!1},{name:"08_sweep",color:"30beff",uniqsnd:!1},{name:"09_riser",color:"30beff",uniqsnd:!1},{name:"10_release",color:"30beff",uniqsnd:!1},{name:"11_lead",color:"eb6b24",uniqsnd:!1},{name:"12_arp",color:"eb6b24",uniqsnd:!1},{name:"13_piano",color:"eb6b24",uniqsnd:!1},{name:"14_pulsingpiano",color:"eb6b24",uniqsnd:!1},{name:"15_synthpiano",color:"eb6b24",uniqsnd:!1},{name:"16_whistle",color:"ab3357",uniqsnd:!1},{name:"17_choir",color:"ab3357",uniqsnd:!1},{name:"18_runners",color:"ab3357",uniqsnd:!1},{name:"19_sand",color:"ab3357",uniqsnd:!1},{name:"20_owners",color:"ab3357",uniqsnd:!1}],this.bonusarray=[{name:"Runners",src:"v1-b1-runners.mp4",code:"1,6,9,12,18",sound:"bonus-runners",aspire:"aspire-runners"},{name:"Black Hole",src:"v1-b2-blackhole.mp4",code:"2,5,6,12,19",sound:"bonus-blackhole",aspire:"aspire-blackhole"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
