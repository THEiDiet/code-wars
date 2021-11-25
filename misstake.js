function swapValues(args) {
    //     var args = Array.prototype.slice.apply(arguments);
        var temp = args[0];
        args[0] = args[1];
        args[1] = temp;
    }