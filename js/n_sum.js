function numSum(nums, n, target) {
    if (!nums.length || nums.length < n) return [];
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const stack = [];

    const backtrace = (start) => {
        if (stack.length === n - 1) {
            let end = nums.length - 1;

            while (start <= end) {
                const temp = stack.reduce((acc, cur) => acc + cur);
                if (temp + nums[start] === target) {
                    result.push([...stack, nums[start]]);
                }
                if (start !== end && temp + nums[end] === target) {
                    result.push([...stack, nums[end]]);
                }
                start++;
                end--;
            }
            return;
        }

        for (let i = start; i < nums.length; i++) {
            stack.push(nums[i]);
            backtrace(i + 1);
            stack.pop();
        }
    };
    backtrace(0);
    return result;
}


var nSum = function(nums, target) {
    const helper = (index, N, temp) => {
        // 如果下标越界了或者 N < 3 就没有必要在接着走下去了
        if (index === len || N < 3) {
            return
        }
        for (let i = index; i < len; i++) {
            // 剔除重复的元素
            if (i > index && nums[i] === nums[i - 1]) {
                continue
            }
            // 如果 N > 3 的话就接着递归
            // 并且在递归结束之后也不走下边的逻辑
            // 注意这里不能用 return
            // 否则循环便不能跑完整
            if (N > 3) {
                helper(i + 1, N - 1, [nums[i], ...temp])
                continue·
            }
            // 当走到这里的时候，相当于在求「三数之和」了
            // temp 数组在这里只是把前面递归加入的数组算进来
            let left = i + 1
            let right = len - 1
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right] + temp.reduce((prev, curr) => prev + curr)
                if (sum === target) {
                    res.push([...temp, nums[i], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    let res = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    helper(0, 4, [])
    return res
};