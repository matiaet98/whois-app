// @flow
export const SUBMIT_HOST = 'SUBMIT_HOST';

export const submitHost = (host : string) => (dispatch : any) => {
    fetch('http://localhost:3000/api/whois?site=' + host, { method: 'GET', mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch({
                type: SUBMIT_HOST,
                payload: data
            })
        });
}