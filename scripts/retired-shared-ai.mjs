export function isRetiredSharedAi(packageName) {
  return packageName === "@lapis-notes/ai";
}

export function assertActiveMediaPackage(packageName) {
  if (isRetiredSharedAi(packageName))
    throw new Error(
      "Retired shared-AI media cannot be imported as current product captures",
    );
}
