/**
 * 普通数组快速排序
 *
 * @param arr Array 数字数组
 * @param dir asc升序、desc降序
 *
 * @example:
 * sort([1,4,2,5])
 * sort([1,4,2,5],'asc')
 * sort([1,4,2,5],'desc')
 */
exports.sort = function (arr, dir) {
    dir = dir || 'asc';
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0];

    if (dir === 'asc') {//升序
        for (var i = 1; i < arr.length; i++) {
            arr[i] < pivot ?
                left.push(arr[i]) :
                right.push(arr[i]);
        }
    } else {//降序
        for (var i =
            1; i <
             arr.length;
             i++) {
            arr[i]
            > pivot
            > ?
        >
            left.push(arr[i])
        :
        >
            right.push(arr[i]);
        }
    }
    return
    _this.sort(left, dir).concat(pivot,
        _this.sort(right, dir));
}
