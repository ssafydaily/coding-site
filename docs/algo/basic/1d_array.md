# 1차 배열 기본

- 입력 값들이 양의 정수이고, 적당한 범위내의 값들이다.
  
  - 값을 배열의 인덱스로 사용
  
  - 최대값을 알아야 배열(List[])의 크기를 정할 수 있다.



```python
MAX_VAL = 100                #  자료
cnt = [0] * (MAX_VAL + 1)    # 배열의 크기에 주의
```

## 최대/최소 위치 찾기

- 최대/최소가 여러개 일 경우 처음과 마지막 위치 찾기

```python
MAX_VAL = 100                #  자료
cnt = [0] * (MAX_VAL + 1)    # 배열의 크기에 주의
# 카운팅 작업

max_idx = 0                  # 최대값 위치 저장
for idx in range(1, MAX_VAL + 1):
    if cnt[max_idx] <= cnt[idx]:    # 최대값이 다수일 때 마지막 위치 찾기
        max_idx = idx
```

## 중첩 반복문

- for와 while 중에 어떤 걸 사용할지 생각한다.

- 항상 들여쓰기에 주의한다.

- 반복에 사용되는 변수명에 주의한다.
  
  - 자신만의 스타일을 정한다.

---------

## 반복문 탈출하기

- 상태(flag) 변수 활용하기

```python
flag = False


for i in range(N):
    # code
    for j in range(N):
        if codition == True:
            # code
            flag = True        # 상태 저장하고 탈출
            break 
    if flag:
        break
```
