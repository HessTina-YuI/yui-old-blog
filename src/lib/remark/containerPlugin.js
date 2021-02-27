import visit from 'unist-util-visit';

const reg = RegExp(/:::/);
const containerPlugin = () => {
    return (tree) => {
        visit(tree, 'text', onText);
    };

    function onText(node) {
        let value = node.value;
        if (value.match(reg)) {
            node.value = value.replace(reg, '');
            node.type = 'cc';
        }
        // console.log(node);
    }
};

export default containerPlugin;
