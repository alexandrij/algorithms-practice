const lengthOfLongestIncreasingSubsequence = (nums) => {
  // массив, содержащий длину максимальной подпоследовательности
  // в позиции соответствующего элемента,
  // т.е. longestSubsequence[0] соответствует максимальной длине для
  // nums[0]
  const longestSubsequence = [1];

  // 0-й элемент уже обработали через установку начального значения,
  for (let i = 1; i < nums.length; i++) {
    // находим в эту переменную длину максимальной подпоследовательности,
    // в которую можем добавить текущий элемент
    let maxPreviousSubsequence = 0;

    // проходим все элементы левее текущего - i элемента
    // находим те, которые меньше текущего значение - nums[i]
    // и находим наибольшую подпоследовательность,
    // предыдущие значения хранятся в longestSubsequence[j]
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && longestSubsequence[j] > maxPreviousSubsequence) {
        maxPreviousSubsequence = longestSubsequence[j];
      }
    }

    // после обработки очередного элемента,
    // длина подпоследовательности увеличивается на 1
    longestSubsequence.push(maxPreviousSubsequence + 1);
  }

  // ответ может быть в любой позиции, и это просто максимальное число
  return Math.max(...longestSubsequence);
};

// максимальная длина - 4
console.log(lengthOfLongestIncreasingSubsequence([1, 5, 3, 6, 4, 5, 2]));
