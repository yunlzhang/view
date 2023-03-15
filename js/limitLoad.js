//并发请求处理 request promise请求
export const limitLoad = (requests, limit) => {
    let sequence = [].concat(requests);
    let promises = sequence.splice(0, limit).map((request, index) => {
        return request().then(() => {
            return index;
        });
    });
    return sequence.reduce((pCollect, request) => {
        return pCollect
            .then(() => {
                return Promise.race(promises);
            })
            .then(fastestIndex => {
                promises[fastestIndex] = request().then(
                    () => {
                        return fastestIndex;
                    }
                );
            })
            .catch(err => {
                console.error(err);
            });
    }, Promise.resolve())
    .then(() => {
        return Promise.all(promises);
    });
}