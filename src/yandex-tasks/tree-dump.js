const dump = (tree) => {
    let res = [];
    let childs = [];

    if (!tree)
        return res;

    res.push(tree.value);

    if (tree.children && tree.children.length > 0) {
        tree.children.forEach((c) => {
            let chs = dump(c);
            res.push(chs.shift());
            childs = childs.concat(chs);
        });
    }
    return res.concat(childs);
}

const tree = {
    "value": 1,
    "children": [
        {
            "value": 2,
            "children": [
                {
                    "value": 4
                },
                {
                    "value": 5
                }
            ]
        },
        {
            "value": 3,
            "children": [
                {
                    "value": 6
                }
            ]
        }
    ]
};
console.log(dump(tree));
