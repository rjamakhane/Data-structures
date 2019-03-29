class BinarySearch {

    constructor() {

    }

    search(items, value) {
        var middleIndex = Math.floor((items.length - 1) / 2);

        if (value < items[middleIndex]) {
            return this.search(items.slice(0, middleIndex), value);
        }
        else if (value > items[middleIndex]) {
            return this.search(items.slice((middleIndex + 1), items.length), value);
        }
        else {
            return middleIndex;
        }
    }
}

var obj = new BinarySearch();
console.log(obj.search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));