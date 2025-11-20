function binarySearch(nums, target) {
	let low =0;
	let high = nums.length -1;
	while(low<=high){
		let mid = Math.floor((low+high)/2);
		if(nums[mid]>target){
			high = mid-1;
		}
		else if(nums[mid]<target){
			low=mid+1;
		}
		else{
			return mid;
		}
	}
	return -1;
// Your code here
// Return index if target is present
// else return -1
}

module.exports = binarySearch;
