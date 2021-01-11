function numSum(nums, n, m) {
    if (!nums.length || nums.length < n) return [];
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const stack = [];

    const backtrace = (start) => {
        if (stack.length === n - 1) {
            let end = nums.length - 1;

            while (start <= end) {
                const temp = stack.reduce((acc, cur) => acc + cur);
                if (temp + nums[start] === m) {
                    result.push([...stack, nums[start]]);
                }
                if (start !== end && temp + nums[end] === m) {
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