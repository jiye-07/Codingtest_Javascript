function solution(rsp) {
  const winMap = {
    "2": "0", // 가위 이기려면 바위
    "0": "5", // 바위 이기려면 보
    "5": "2"  // 보 이기려면 가위
  };

  return [...rsp].map(hand => winMap[hand]).join("");
}