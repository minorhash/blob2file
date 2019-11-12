var bug,el
var dur=3000,nam="bug",
cap = new CCapture({ format: 'png', framerate: 60,name:nam });
var dson={cli:0}

//if(pboo===true){posF()}
function setup() {

cnv=createCanvas(w/2, h/2);
cnv.parent("cnv")

background(0);
print(pboo)

bug = new Bug(w/4, h/4, 40,15);

}//set

function draw() {
  bug.mov();
  bug.dis();
crE()

print(pboo)

var tim=millis()
if(tim>5000){
noLoop()
background(200);
}//tim

//crCap(cap,dur)
}//draw

function mousePressed(){

saveFrames('bug', 'png', 1, 30, data => {
var iarr=[],barr=[],carr=[],rarr=[],blarr=[],tmp,bfa=[]

    for(let i=0;i<data.length;i++){
iarr.push(data[i].imageData)
barr.push(iarr[i].split(";"));
        rarr.push(barr[i][1].split(",")[1]);
    }//for
tmp= barr[1][1].split(",")[1];
var ctype=barr[0][0].split(":")[1]

for(let i=0;i<data.length;i++){
blarr.push(b64toB(rarr[i], ctype));

}
print(blarr)

for(let i=0;i<data.length;i++){
bfa.push(blarr,i+".png")
}
print(bfa)

})//sav

}//mouse

function b64toB(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

function b2F(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}
