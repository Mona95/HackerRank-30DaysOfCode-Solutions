
   this.removeDuplicates=function(head){
      
      let uniqueData = []

        while(head) {
          let exist = uniqueData.includes(head.data)

          if(!exist) uniqueData.push(head.data)

          head = head.next
        }

        console.log(uniqueData.join(' '))
    }
