class NumberListNode {
    value: number
    next: NumberListNode | undefined


    constructor(value: number) {
        this.value = value
        this.next = undefined
    }

}


/**
 * Best used when we want efficiency at appending items
 * rather than retreiving them.
 */
class NumberLinkedList {
    private tail: NumberListNode = {
        value : 0, 
        next: undefined
    }
    
    private head: NumberListNode = this.tail

    at(idx: number): number {
        let tmp : NumberListNode = this.head.next
        let i: number = 0
        while(tmp != undefined){
            if (i == idx){
                return tmp.value
            }else {
                tmp = tmp.next
                i++
            }
        }
        return -1
    }

    append(value: number){
        let v = new NumberListNode(value)
        this.tail.next = v
        this.tail = this.tail.next
    }
}

let list: NumberLinkedList = new NumberLinkedList()
list.append(2)
list.append(3)
list.append(4)

console.log(list.at(0)) // 2
console.log(list.at(1)) // 3
console.log(list.at(2)) // 4