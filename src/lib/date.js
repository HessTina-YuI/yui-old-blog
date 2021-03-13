const parseToDate = (dateTimeString) => {
    if (!dateTimeString) {
        return null;
    }

    const dateTimeArray = dateTimeString.split(' ');
    const dateArray = dateTimeArray[0].split('-');
    const timeArray = dateTimeArray[1].split(':');

    if (timeArray.size === 3) {
        return new Date(dateArray[0], dateArray[1], dateArray[2], timeArray[0], timeArray[1], timeArray[2]);
    } else {
        return new Date(dateArray[0], dateArray[1], dateArray[2], timeArray[0], timeArray[1]);
    }
};

const formatDate = (date) => {
    const year = date.getFullYear();
    const monthOrigin = date.getMonth();
    const dayOrigin = date.getDay();

    let month;
    if (monthOrigin / 10 < 1) {
        month = '0' + monthOrigin;
    } else {
        month = monthOrigin;
    }

    let day;
    if (dayOrigin / 10 < 1) {
        day = '0' + dayOrigin;
    } else {
        day = dayOrigin;
    }

    return `${year}-${month}-${day}`;
};

export { parseToDate, formatDate };