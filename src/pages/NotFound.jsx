export default function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px' }}>404</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <a
        href="/"
        style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '10px 20px',
          borderRadius: '8px',
          background: '#333',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        ホームへ戻る
      </a>
    </div>
  );
}
