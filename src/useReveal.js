import { a as e } from "./rolldown-runtime.js";
import { f as t } from "./vendor.js";
var n = e(t(), 1);
function r() {
  let e = (0, n.useRef)(null);
  return (
    (0, n.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (t.classList.add(`visible`), n.unobserve(t));
        },
        { threshold: 0.1 },
      );
      return (n.observe(t), () => n.disconnect());
    }, []),
    e
  );
}
export { r as t };
