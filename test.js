var secondGreaterElement = function(nums) {
    let n = nums.length, p = 0, q = 0;// 分别是两个栈s,t的栈顶
    let ans = new Array(n).fill(-1);
    let s = [], t = [];
    for (let i = 0; i < n; ++i) {
        let x = nums[i];// 遍历nums,将x = nums[i]入栈
        while (q > 0 && nums[t[q - 1]] < x) // 当前t栈顶对应nums值小于x
            ans[t[--q]] = x;// t[--q]的右侧第二大元素是 x，生成答案，同时弹出栈顶
        let pp = p;
        while (p > 0 && nums[s[p - 1]] < x) --p;// x是s栈顶右侧第一大，弹出栈顶
        t.splice(q, 0, ...s.splice(p, pp - p))
        //将栈s从p位置开始拷贝`pp-p`个元素到栈t的q下标。这里相当于s弹出的元素都添加到了t的栈顶,因为这部分元素遇到了右侧第一大的数x，现在转移到t第二栈，当这部分元素在t中遇到更大的数，这个更大的数就是这部分元素的右侧第二大数。
        q += pp - p;// 更新第二栈t的新栈顶q
        s[p++] = i;// 当前元素nums[i]下标i入栈s
    }
    console.log(ans);
    return ans;
};

secondGreaterElement([2,4,0,9,6]);