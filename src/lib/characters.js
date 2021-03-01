    const getPostWordCount = (text) => {
    let len = 0;
    try {
        // 先将回车换行符做特殊处理
        text = text.replace(/(rn+|s+|  +)/g, '龍');
        // 处理英文字符数字，连续字母、数字、英文符号视为一个单词
        text = text.replace(/[x00-xf]/g, 'm');
        // 合并字符m，连续字母、数字、英文符号视为一个单词
        text = text.replace(/m+/g, '*');
        // 去掉回车换行符
        text = text.replace(/龍+/g, '');
        // 返回字数
        len = text.length;
    } catch (e) {
        console.error(e);
    }

    return len;
};

export { getPostWordCount };