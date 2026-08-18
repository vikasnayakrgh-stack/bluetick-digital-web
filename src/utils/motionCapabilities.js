/**
 * Hardware & Device Capability Detection for Adaptive Web Motion
 */

export function getMotionCapabilities() {
  if (typeof window === 'undefined') {
    return { allowComplexMotion: true, allow3dTilt: false, allowWebGL: true, maxStaggerItems: 6 };
  }

  // Check user OS reduced motion preference
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    return { allowComplexMotion: false, allow3dTilt: false, allowWebGL: false, maxStaggerItems: 0 };
  }

  // Hardware capability checks
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4; // GB
  const saveData = navigator.connection?.saveData || false;
  const isMobile = window.innerWidth < 768;

  const isLowEndDevice = cores < 4 || memory < 4 || saveData;

  return {
    allowComplexMotion: !isMobile && !isLowEndDevice,
    allow3dTilt: !isMobile && !isLowEndDevice,
    allowWebGL: !isMobile && !isLowEndDevice,
    maxStaggerItems: isLowEndDevice ? 2 : isMobile ? 3 : 6,
  };
}

