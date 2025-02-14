export type Vec2 = {
  x: number;
  y: number;
};

export function vec2(x: number, y: number): Vec2 {
  return { x, y };
}

export function dist(a: Vec2, b: Vec2): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function map(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
): number {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

export function pointInTriangle(
  p: Vec2,
  p0: Vec2,
  p1: Vec2,
  p2: Vec2,
): boolean {
  const s =
    p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y;
  const t =
    p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y;

  if (s < 0 !== t < 0) {
    return false;
  }

  const A =
    -p1.y * p2.x + p0.y * (p2.x - p1.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y;

  return A < 0 ? s <= 0 && s + t >= A : s >= 0 && s + t <= A;
}

export function pointInHexagon(p: Vec2, center: Vec2, size: number): boolean {
  const dx = Math.abs(p.x - center.x) / size;
  const dy = Math.abs(p.y - center.y) / size;
  const a = 0.25 * Math.sqrt(3.0);
  return dy <= a * 2 && dx <= 1 - dy / (a * 3);
}

export function pointInStar(
  p: Vec2,
  center: Vec2,
  outerRadius: number,
  innerRadius: number,
  points: number,
): boolean {
  const angle = Math.atan2(p.y - center.y, p.x - center.x);
  const length = dist(p, center);
  const angleStep = Math.PI / points;

  const radiusAtAngle =
    ((angle + Math.PI) % angleStep) / angleStep < 0.5
      ? outerRadius
      : innerRadius;

  return length <= radiusAtAngle;
}
