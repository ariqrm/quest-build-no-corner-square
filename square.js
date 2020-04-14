function squere(data) {
    let res = []
    let i, j, k, atas, bawah
    if (data>0) {
        for (i = 0; i <= data+1; i++) {
            for (j = 0; j <= data+1; j++) { 
                if (j === 0 || j === data+1) {
                    if (i === 0 || i === data+1) {
                        res[j] = (' ')
                    }else{
                        res[j] = ('x')
                    }
                } else {
                    if(i==data+1){
                        res[j] = ('x')
                    }else if(i==0){
                        res[j] = ('x')
                    }else{
                        res[j] = (' ')
                    }
                }
            }
            console.log(res.join(" "))
        }
    } else {
        console.log("Please insert a valid number")
    }
}

squere(3)