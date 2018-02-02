!function(){
    var duration = 40
    $('.btn').on('click','button',function(){
        $(this).css('font-weight','bold').siblings().css('font-weight','normal')
        var speed = $(this).attr('speed')
        switch(speed){
            case 'slow' :
            duration = 70
            break;
            case 'normal' :
            duration = 40
            break;
            case 'fast' :
            duration = 10
            break;
        }
    })
    
    function writeCode(code){
        var codeCt= document.querySelector('#code')
        var styleTag = document.querySelector('#styleTag')
        var n =0
        var clock

        clock = setTimeout(function run(){
            n++

            codeCt.innerText = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            codeCt.scrollTop = codeCt.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)
            }
        },duration)
    }

    var code=`
    /*设置皮肤*/
    .preview-ct {
        background: #FFE600;
    }
    /*画眼睛*/
    .eye {
        position: absolute;
        width: 52px;
        height: 52px;
        background: #000;
        border-radius: 50%;
    }
    /*这是左眼*/
    .eye.left {
        top: 0;
        left: 0;
        margin-left: 50px;
    }
    /*这是右眼*/
    .eye.right {
        top: 0;
        right: 0;
        margin-right: 50px;
    }
    /*白色的眼珠*/
    .eye:after {
        position: absolute;
        top: 3px;
        left: 10px;
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
    }
    /*鼻子*/
    .nose {
        width: 0px;
        height: 0px;
        border: 15px solid;
        border-color: black transparent transparent;
        border-radius: 12px;
        position: absolute;
        top: 25px;
        left: 50%;
        margin-left: -15px
    }
    /*红脸蛋*/
    .face {
        width: 75px;
        height: 75px;
        background: #FF0000;
        border: 2px solid;
        border-radius: 50%;
        position: absolute;
    }
    /*左脸*/
    .face.left {
        top: 92px;
        left: 0;
    }
    /*右脸*/
    .face.right {
        top: 92px;
        right: 0;
    }
    /*上嘴唇*/
    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid black;
        border-top: none;
        position: absolute;
        top: 50px;
        background: #FFE600;
    }
    /*左边*/
    .upperLip.left {
        right: 50%;
        border-right: none;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-20deg)
    }
    /*右边*/
    .upperLip.right {
        left: 50%;
        border-left: none;
        border-bottom-right-radius: 40px 25px;
        transform: rotate(20deg)
    }
    .lowerLip-ct {
        width: 300px;
        height: 152px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        bottom: 0;
        overflow: hidden;
    }
    /*下嘴唇和舌头*/
    .lowerLip {
        position: absolute;
        bottom: 0;
        width: 300px;
        height: 3000px;
        border: 2px solid;
        border-radius: 200px/2000px;
        background: #9B000A;
        overflow: hidden;
    }
    /*小舌头*/
    .lowerLip::after {
        content: '';
        width: 120px;
        height: 120px;
        border-radius: 60px/30px;
        background: #FF485F;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -60px;
    }
    /*OK!Done*/
    `
    writeCode(code)

}()