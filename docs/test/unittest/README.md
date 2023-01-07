# unittest

[참고> python 3.10.4 version](https://docs.python.org/3/library/unittest.html)

- `JUnit`[<Badge type="tip" text="link" vertical="middle"/>](https://junit.org/junit5/) 에서 영감을 받고 다른 언어의 주요 단위 테스트 프레임워크와 비슷한 특징을 가짐
- `테스트 자동화`, `테스트를 위한 사전 설정(setup)`과 `종료(shutdown) 코드 공유`, `테스트를 컬렉션에 종합하기`, `테스트와 리포트 프레임워크의 분리` 등을 지원

>  객체 지향적 방법을 지원하기 위한 주요 개념
>
> - **`test fixture`** : 1개 또는 그 이상의 테스트를 수행할 때 필요한 준비와 그와 관련한 동작들
> - **`test case`** : **테스트의 개별 단위**. 특정한 입력 모음에 대한 특정한 결과를 확인
>   - `unittest`에서는 베이스 클래인 `TestCase`를 지원
> - **`test suite`** : **테스트 묶음**은 여러 테스트 케이스, 테스트 묶음, 또는 둘 다를 포함. 실행할 테스트 케이스를 종합하는데 사용
> - **`test runner`** : **테스트 실행자**는 테스트 실행을 조율하고 테스트 결과를 사용자에게 제공하는 역할
> - 그 외
>   - `doctest 모듈`: 다른 특징을 가지는 또 다른 테스트 지원 모듈
>   - `pytest` : 테스트를 작성하는 간편한 문법을 제공하는 *3rd-party 테스트 프레임워크*
>   - `Tools/unittestgui/unittestgui.py` 스크립트는 테스트 탐색 및 실행을 위한 GUI 도구 



## 간단한 예시

``` python
import unittest

class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):      # 특정 예외가 발생했는지 검증
            s.split(2)

if __name__ == '__main__':
    unittest.main()
```

- 테스트 케이스는 `unittest.TestCase` 를 상속받은 서브 클래스
- 클래스 이름은 `Test`로 시작, 3개의 테스트는 `test` 글자로 시작하는 이름을 가진 메소드
- `assert` 대신에 `assertEqual()`, `assertTrue()`, `assertRaises()` 를 사용하면 테스트 결과를 취합해서 리포트를 생성할 수 있음.
- `setUp()`과 `tearDown()` 메소드로 각각의 테스트 메소드의 실행전과 후에 필요한 작업을 할 수 있다. 


## 명령행 인터페이스

- unittest 모듈은 명령행을 사용하여 모듈, 클래스, 심지어 각 테스트 메서드의 테스트들을 실행할 수 있다.

```sh
python -m unittest test_module1 test_module2
python -m unittest test_module.TestClass
python -m unittest test_module.TestClass.test_method
```


- 모듈 이름이나 완전히 정규화된 클래스나 메서드 이름이 포함된 목록을 전달할 수 있으며, 테스트 모듈은 파일 경로로 지정할 수 있음.

```bash
python -m unittest tests/test_something.py
```

- `-v` 옵션을 주면 좀 더 상세하게 출력

```bash
python -m unittest -v test_module
```

- 아무 인자 없이 실행하면 테스트 탐색(Discovery)이 실행됩니다:

```bash
python -m unittest
```

- 모든 명령행 옵션 목록을 보기:

```bash
python -m unittest -h
```

-------



## 테스트 탐색

> 버전 3.2 추가

- 모든 테스트 파일은 반드시 프로젝트의 가장 상위 디렉터리로부터 모듈 또는 패키지(이름 공간 패키지 포함)로 임포트 가능해야 함

  - 즉, 파일 이름은 반드시 유효한 식별자

- `TestLoader.discover()` 로 구현되었으며, 명령행으로 사용가능


```bash
$ cd project_directory
$ python -m unittest discover
```

::: tip 서브 명렁어
- `-v`, `--verbose` : 상세 출력
- `-s`, `--start-directory <directory>` : 탐색을 시작할 디렉토리(디폴트는 .)
- `-p`, `--pattern <pattern>` : 테스트 파일을 검색할 패턴 (기본갑은 test*.py)
- `-t`, `--top-level-directory <director>` : 프로젝트 최상위 디렉토리

-​	`-s`, `-p`, `-t` 옵션은 순서대로 위치 인자로서 사용 가능함.
:::


```bash
python -m unittest discover -s project_directory -p "*_test.py"
python -m unittest discover project_directory "*_test.py"
```

::: warning 주의
테스트 탐색은 테스트를 임포트해서 로드함. 테스트 파일을 임포트하기 위해 경로를 패키지 이름으로 변경함.
:::



## 테스트 코드 구조 

- 단위 테스트의 기본 구성 블록은 *테스트 케이스*
- unittest에서 테스트 케이스는 `unittest.TestCase` 의 인스턴스
  - `TestCase`의 서브 클래스 이거나, `FunctionTestCase`를 작성

- 어떤 것을 테스트하기 위해서는 `TestCase` 베이스 클래스에서 제공하는 `assert*()` 메서드 중 한 개를 사용

- 테스트가 실패한다면 그 이유를 설명한 메시지가 포함된 예외가 발생



- 사전 설정 코드는 `setUp()`으로 분리
- 테스트 메소드 실행되고 정리를 위한 작업은 `tearDown()` 사용



- 개별 테스트 메서드를 실행하기 위해 고유한 테스트 픽스쳐에 해당하는 새로운 테스트 케이스 인스턴스가 생성

-  `setUp()`, `tearDown()`, `__init__()`는 테스트 당 1번씩 실행



#### Test suite

- 테스트하려는 기능에 따라 테스트들을 같이 모아서 테스트 케이스 구현을 사용하는 것을 추천

- 이것을 위해 `unittest`는  *테스트 묶음(test suite)* 을 제공 >>  `unittest.TestSuite`클래스

  ```python
  import unittest
  def suite():
      suite = unittest.TestSuite()
      suite.addTest(WidgetTestCase('test_default_widget_size'))
      suite.addTest(WidgetTestCase('test_widget_resize'))
      return suite
  
  if __name__ == '__main__':
      runner = unittest.TextTestRunner()
      runner.run(suite())
  ```

  > 테스트 케이스와 테스트 묶음의 정의를 테스트하려는 코드와 같은 모듈(예를 들어 file:widget.py)에 넣을 수 있지만 테스트 코드를 분리된 모듈(예를 들어 `test_widget.py`)에 넣는 경우의 이점:

  - 테스트 모듈이 명령행에서 독립적으로 작동할 수 있음
  - 테스트 코드가 배포될 코드와 쉽게 분리될 수 있음
  - 충분한 이유 없이 테스트하려는 코드에 맞춰서 테스트 코드를 바꾸려는 유혹이 덜 합니다.
  - 테스트 코드가 테스트하려는 코드에 비해 훨씬 덜 빈번하게 수정되어야 합니다.
  - 테스트하려는 코드는 더 쉽게 리팩토링할 수 있습니다.
  - C 언어로 작성된 모듈의 테스트 코드는 반드시 분리된 모듈에 위치해야 합니다, 따라서 일관성을 지키는 것이 어떨까요?
  - 만약 테스트 전략이 바뀌더라도 소스 코드를 바꿀 필요가 없습니다.



## 이전의 테스트 코드를 다시 사용

- 이전의 모든 테스트 함수를 `TestCase` 서브 클래스로 변경하는 작업 없이 기존의 테스트 코드를 `unittest`로 실행하길 원하는 경우
-  `TestCase`의 서브 클래스인 `FunctionTestCase` 클래스를 제공. 이는 기존 테스트 함수를 감싸는데 사용할 수 있고, 사전 설정과 정리 함수 또한 같이 사용할 수 있음

```python
def testSomething():
    something = makeSomething()
    assert something.name is not None
    # ...
    
testcase = unittest.FunctionTestCase(testSomething,
                                     setUp=makeSomethingDB,
                                     tearDown=deleteSomethingDB)
```

::: tip 참고
- `FunctionTestCase`를 사용하여 기존 테스트를 `unittest`
- 기반 시스템으로 빠르게 변경할 수 있을지라도 이 방법을 추천하지는 않습니다. 
- 시간을 들여서 적절한 `TestCase` 서브 클래스를 설정하는 것이 미래에 있을 테스트 리팩토링을 대단히 쉽게 만들어줄 것입니다.
:::