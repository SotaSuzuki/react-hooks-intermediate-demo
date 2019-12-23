import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Appbar } from '../components';

function Demo() {
  return (
    <>
      <Appbar />
      <Main />
    </>
  );
}

function Main() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [result, setResult] = useState({});
  const [fetching, setFetching] = useState(false);
  const [count, setCount] = useState(0);

  const getData = async url => (await window.fetch(url)).json();

  const handleClickFetchButton = useCallback(
    async evt => {
      evt.preventDefault();
      setFetching(true);
      try {
        const data = await getData(url);
        setResult({ data });
      } catch (err) {
      } finally {
        setFetching(false);
      }
    },
    [url]
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData(url);
        setResult({ data });
      } catch (err) {
      } finally {
        setFetching(false);
      }
    };
    fetch();
  }, [url]);

  const prettyData = useMemo(() => JSON.stringify(result, null, 2), [result]);

  return (
    <main className="pt-3 container-md">
      <div className="d-flex">
        <div>
          <div className="mb-4">
            <h3 className="mb-2">Counter</h3>
            <Counter count={count} setCount={setCount} />
          </div>

          <h3 className="mb-2">API Request</h3>
          <label className="d-block mb-2">
            <textarea
              className="form-control input-monospace"
              style={{ width: 240 }}
              onChange={evt => setUrl(evt.target.value)}
              rows="2"
              value={url}
            />
          </label>

          <div className="d-flex">
            <button
              className="btn"
              disabled={fetching}
              onClick={handleClickFetchButton}
            >
              {fetching ? (
                <>
                  <span>Fetching</span>
                  <span className="AnimatedEllipsis"></span>
                </>
              ) : (
                <span>Fetch Data</span>
              )}
            </button>
          </div>
        </div>

        <div className="ml-6 markdown-body flex-auto">
          <code className="d-block" style={{ whiteSpace: 'pre-wrap' }}>
            {prettyData}
          </code>
        </div>
      </div>
    </main>
  );
}

function Counter({ count, setCount }) {
  return (
    <>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="btn ml-2" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span className="ml-2">{count}</span>
    </>
  );
}

export default Demo;
