import { useState, useEffect, useRef } from "react";
import anime from "animejs";

import sock1 from "./assets/sock1.svg";
import sock2 from "./assets/sock2.svg";
import sock3 from "./assets/sock3.svg";
import sock4 from "./assets/sock4.svg";
import sock5 from "./assets/sock5.svg";
import sock6 from "./assets/sock6.svg";

import styles from "./App.module.css";

function App() {
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);
  const [positions, setPositions] = useState<any>([]);
  const [found, setFound] = useState<any>([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let p = [];

    for (let i = 0; i < 12; i++) {
      p.push([
        `${Math.floor(Math.random() * (90 - 10 + 1) + 10)}%`,
        `${Math.floor(Math.random() * (80 - 10 + 1) + 10)}%`,
      ]);
    }

    setPositions(p);
  }, []);

  useEffect(() => {
    if (left === right && left !== null && right !== null) {
      setTimeout(() => {
        anime({
          targets: (leftRef.current! as HTMLElement).querySelectorAll("button")[
            left
          ],
          left: "100%",
          translateX: "-25px",
          duration: 300,
          easing: "easeInOutQuad",
          complete: () => {
            anime({
              targets: (leftRef.current! as HTMLElement).querySelectorAll(
                "button"
              )[left],
              top: "-150%",
              delay: 1000,
              duration: 300,
              easing: "easeInOutQuad",
              complete: () => {
                setTimeout(() => {
                  setFound((prev: any) => [...prev, left]);
                }, 300);
              },
            });
          },
        });
        anime({
          targets: (rightRef.current! as HTMLElement).querySelectorAll(
            "button"
          )[right],
          left: "0%",
          translateX: "25px",
          duration: 300,
          easing: "easeInOutQuad",
          complete: () => {
            anime({
              targets: (rightRef.current! as HTMLElement).querySelectorAll(
                "button"
              )[right],
              top: "-150%",
              delay: 1000,
              duration: 300,
              easing: "easeInOutQuad",
            });
          },
        });
      }, 600);
    }
  }, [left, right]);

  return (
    <div className={styles.root}>
      <div className={styles.top} />
      <div className={styles.bottom}>
        <div ref={leftRef} className={styles.left}>
          <button
            className={styles.sock}
            style={{
              left:
                left === 0
                  ? "50%"
                  : positions.length >= 12
                  ? positions[0][0]
                  : "100%",
              top:
                left === 0
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[0][1]
                  : "50%",
              display: found.includes(0) ? "none" : "block",
            }}
            onClick={() => setLeft(0)}
          >
            <img src={sock1} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                left === 1
                  ? "50%"
                  : positions.length >= 12
                  ? positions[1][0]
                  : "100%",
              top:
                left === 1
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[1][1]
                  : "50%",
              display: found.includes(1) ? "none" : "block",
            }}
            onClick={() => setLeft(1)}
          >
            <img src={sock2} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                left === 2
                  ? "50%"
                  : positions.length >= 12
                  ? positions[2][0]
                  : "100%",
              top:
                left === 2
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[2][1]
                  : "50%",
              display: found.includes(2) ? "none" : "block",
            }}
            onClick={() => setLeft(2)}
          >
            <img src={sock3} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                left === 3
                  ? "50%"
                  : positions.length >= 12
                  ? positions[3][0]
                  : "100%",
              top:
                left === 3
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[3][1]
                  : "50%",
              display: found.includes(3) ? "none" : "block",
            }}
            onClick={() => setLeft(3)}
          >
            <img src={sock4} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                left === 4
                  ? "50%"
                  : positions.length >= 12
                  ? positions[4][0]
                  : "100%",
              top:
                left === 4
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[4][1]
                  : "50%",
              display: found.includes(4) ? "none" : "block",
            }}
            onClick={() => setLeft(4)}
          >
            <img src={sock5} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                left === 5
                  ? "50%"
                  : positions.length >= 12
                  ? positions[5][0]
                  : "100%",
              top:
                left === 5
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[5][1]
                  : "50%",
              display: found.includes(5) ? "none" : "block",
            }}
            onClick={() => setLeft(5)}
          >
            <img src={sock6} width="50" />
          </button>
        </div>
        <div ref={rightRef} className={styles.right}>
          <button
            className={styles.sock}
            style={{
              left:
                right === 0
                  ? "50%"
                  : positions.length >= 12
                  ? positions[6][0]
                  : 0,
              top:
                right === 0
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[6][1]
                  : "50%",
              display: found.includes(0) ? "none" : "block",
            }}
            onClick={() => setRight(0)}
          >
            <img src={sock1} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                right === 1
                  ? "50%"
                  : positions.length >= 12
                  ? positions[7][0]
                  : 0,
              top:
                right === 1
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[7][1]
                  : "50%",
              display: found.includes(1) ? "none" : "block",
            }}
            onClick={() => setRight(1)}
          >
            <img src={sock2} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                right === 2
                  ? "50%"
                  : positions.length >= 12
                  ? positions[8][0]
                  : 0,
              top:
                right === 2
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[8][1]
                  : "50%",
              display: found.includes(2) ? "none" : "block",
            }}
            onClick={() => setRight(2)}
          >
            <img src={sock3} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                right === 3
                  ? "50%"
                  : positions.length >= 12
                  ? positions[9][0]
                  : 0,
              top:
                right === 3
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[9][1]
                  : "50%",
              display: found.includes(3) ? "none" : "block",
            }}
            onClick={() => setRight(3)}
          >
            <img src={sock4} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                right === 4
                  ? "50%"
                  : positions.length >= 12
                  ? positions[10][0]
                  : 0,
              top:
                right === 4
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[10][1]
                  : "50%",
              display: found.includes(4) ? "none" : "block",
            }}
            onClick={() => setRight(4)}
          >
            <img src={sock5} width="50" />
          </button>
          <button
            className={styles.sock}
            style={{
              left:
                right === 5
                  ? "50%"
                  : positions.length >= 12
                  ? positions[11][0]
                  : 0,
              top:
                right === 5
                  ? "-50%"
                  : positions.length >= 12
                  ? positions[11][1]
                  : "50%",
              display: found.includes(5) ? "none" : "block",
            }}
            onClick={() => setRight(5)}
          >
            <img src={sock6} width="50" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
