function imageChange() {
    imgNode= document.getElementById("imageToChange");
    newsrc="";
    if ((pos= imgNode.src.search("vlc3.png")) >0) newsrc=imgNode.src.substring(0, pos)+ "vlc1.png";
    if ((pos= imgNode.src.search("vlc2.jpg")) >0) newsrc=imgNode.src.substring(0, pos)+ "vlc3.png";
    if ((pos= imgNode.src.search("vlc1.png")) >0) newsrc=imgNode.src.substring(0, pos)+ "vlc2.jpg"; 
    if (newsrc.length>0) imgNode.src= newsrc;
}
