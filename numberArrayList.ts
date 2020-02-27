/**
 * Best used when we want efficiency at appending items
 * rather than retreiving them.
 */
class NumberArrayList {

    private values: Array<number>

    constructor(){
        this.values = new Array()
    }

    append(n: number){
        this.values.push(n)
    }

    at(idx: number): number {
        if (this.values[idx]) //returns undefined instead of error
          return this.values[idx]
        return -1
    }
}

let list2: NumberArrayList = new NumberArrayList()
list2.append(2)
list2.append(3)
list2.append(4)

console.log(list2.at(0)) // 2
console.log(list2.at(1)) // 3
console.log(list2.at(2)) // 4
console.log(list2.at(3)) // -1

