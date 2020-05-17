const errorHandler = err => {
    if (err) {
        if (err.status && err.message) {
            if (err.status === 403 || err.status === 401) {
                localStorage.removeItem('token');
                window.location.pathname = '/login';
            }

            alert(err.status !== 502
                ? err.message
                : '502 Server Error: there is a problem with the server, please contact with support'
            );
        } else {
            // alert('Network Error!');
            alert(err);
        }
    }
};

export {
    errorHandler as default
};
