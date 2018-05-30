const qwe = function(){
        let arr = [1,2,3]
        let postss = []
        //   for(let i =0 ;i<10;i++){console.log(i%3)}
        for(let i =0 ;i<10;i++){
            postss.push(arr[i%3]);
        //   console.log(arr[i%3])
            }
        arr[0] = 9;

        for(let i =0 ;i<10;i++){
            postss.push(arr[i%3]);
            console.log(arr[i%3])
            }
        console.log(postss)
        }

export default qwe;