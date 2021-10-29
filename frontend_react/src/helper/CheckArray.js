export default function CheckArray(arr , n) {
 
    console.log(arr,n);
    if (Array.isArray(arr) !== true || arr.length < n) return false;
        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] !== "number") {
                return false;
            }
        }
        return true;
}