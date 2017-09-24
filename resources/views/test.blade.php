<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>test</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>Document</title>
</head>
<body>

test
test


<script>

    function timeout(ms) {
        //创建promise对象
        return new Promise((resolve, reject) => {
            setTimeout(reject, ms);
        });
    }

    //then()函数接受两个参数，第一个参数为resolve绑定的回调函数，
    // 一旦resolve函数执行就会触发then函数的第一个参数
    //第二个参数为reject绑定的回调函数，一旦reject函数执行就会触发第二个参数函数
    timeout(3000)

        .then(() => {
            //setTimeout(resolve, ms);触发
        alert('ok');
    },() =>{
        ////setTimeout(reject, ms);触发
        alert('erro')
    });
</script>

</body>
</html>