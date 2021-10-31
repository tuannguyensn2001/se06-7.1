export default function CheckArray(arr,n=3,condition = item => typeof item === 'number' ) {

    return arr.filter(condition).length === n;
} 