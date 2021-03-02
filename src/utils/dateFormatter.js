const dateFormatter = (date, page) => {

    const wD = new Intl.DateTimeFormat('ru', { weekday: 'short'}).format(date);
    const y = new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(date);
    const m = new Intl.DateTimeFormat('ru', { month: 'short' }).format(date);
    const d = new Intl.DateTimeFormat('ru', { day: 'numeric' }).format(date);

    const modalM = new Intl.DateTimeFormat('ru', { month: 'long' }).format(date);

    switch (page) {
        case 'main': 
            return (`${wD} ${d} ${m}`);
        case 'modal':
            return (`${d} ${modalM} ${y} года`)
        default: return;
    }
}

export default dateFormatter;