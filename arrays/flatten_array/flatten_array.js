/**
flatten([ [ [ [1], 2], 3], [4], [], [[5]]]);
// -> [1, 2, 3, 4, 5]

flatten(['abc', ['def', ['ghi', ['jkl']]]]);
// -> ['abc', 'def', 'ghi', 'jkl']
 */

// solution 1
function flatten(ar, res){
    for(const v of ar){
        if(v instanceof Array){
            flatten(v, res)
        }else{
            res.push(v)
        }
    }
}

// solution 2
function flattenr(ar){
    const res = []
    for(const v of ar){
        if(v instanceof Array){
            const fd = flattenr(v)
            res.push(...fd)
        }else{
            res.push(v)
        }
    }
    return res
}

// Time complexity: O(n)
// Space complexity: O(n)

let ar = [ [ [ [1], 2], 3], [4], [], [[5]]]
let res =[]
flatten(ar, res)
console.log(res)

console.log(flattenr(ar))

ar = ['abc', ['def', ['ghi', ['jkl']]]]
res =[]
flatten(ar, res)
console.log(res)

