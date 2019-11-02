class GridDataGenerator {
    constructor(columnCount, rowCount) {
        this.columnCount = columnCount;
        this.rowCount = rowCount;

    }
    
    generateColumnDefs() {
        return [
            { headerName: 'Make', field: 'make', minWidth: 250 },
            { headerName: 'Model', field: 'model', minWidth: 250 },
            { headerName: 'Price', field: 'price', minWidth: 250 }

        ];
    }

    generateRowData() {
        return [
            {
                "make": "Toyota",
                "model": "Celica",
                "price": 35000
            },
            {
                "make": "Ford",
                "model": "Mondeo",
                "price": 32000
            },
            {
                "make": "Porsche",
                "model": "Boxter",
                "price": 72000
            },
            {
                "make": "Toyota",
                "model": "Celica",
                "price": 35000
            },
            {
                "make": "Ford",
                "model": "Mondeo",
                "price": 32000
            },
            {
                "make": "Porsche",
                "model": "Boxter",
                "price": 72000
            },
            {
                "make": "Toyota",
                "model": "Celica",
                "price": 35000
            },
            {
                "make": "Ford",
                "model": "Mondeo",
                "price": 32000
            },
            {
                "make": "Porsche",
                "model": "Boxter",
                "price": 72000
            },
            {
                "make": "Toyota",
                "model": "Celica",
                "price": 35000
            },
            {
                "make": "Ford",
                "model": "Mondeo",
                "price": 32000
            },
            {
                "make": "Porsche",
                "model": "Boxter",
                "price": 72000
            }
        ];
    }
}

export default GridDataGenerator;